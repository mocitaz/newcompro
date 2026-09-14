import os
import subprocess
from PIL import Image

def process_all_assets():
    base_dir = os.path.abspath('public')
    print(f"Scanning {base_dir} for optimization...")
    
    # 1. Clean up known orphan/typo files
    typo_file = os.path.join(base_dir, 'industry/secondkesehatan].png')
    if os.path.exists(typo_file):
        os.remove(typo_file)
        print("Removed typo duplicate: secondkesehatan].png")

    empty_dir = os.path.join(base_dir, 'partners_opt')
    if os.path.exists(empty_dir) and os.path.isdir(empty_dir):
        os.rmdir(empty_dir)
        print("Removed empty dir: partners_opt")

    # 2. Optimize Videos using ffmpeg
    hero_mp4 = os.path.join(base_dir, 'hero.mp4')
    newvideo_mp4 = os.path.join(base_dir, 'newvideo.mp4')
    
    if os.path.exists(newvideo_mp4):
        tmp_newvideo = os.path.join(base_dir, 'newvideo_opt.mp4')
        print("Optimizing newvideo.mp4...")
        subprocess.run([
            '/opt/homebrew/bin/ffmpeg', '-y', '-i', newvideo_mp4,
            '-vf', 'scale=1920:-2', '-c:v', 'libx264', '-crf', '24',
            '-preset', 'slow', '-an', '-movflags', '+faststart', tmp_newvideo
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if os.path.exists(tmp_newvideo) and os.path.getsize(tmp_newvideo) > 10000:
            os.replace(tmp_newvideo, newvideo_mp4)
            print(f"newvideo.mp4 optimized to {os.path.getsize(newvideo_mp4)/1024/1024:.2f} MB")

    if os.path.exists(hero_mp4):
        tmp_hero = os.path.join(base_dir, 'hero_opt.mp4')
        print("Optimizing hero.mp4...")
        subprocess.run([
            '/opt/homebrew/bin/ffmpeg', '-y', '-i', hero_mp4,
            '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-crf', '26',
            '-preset', 'slow', '-an', '-movflags', '+faststart', tmp_hero
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if os.path.exists(tmp_hero) and os.path.getsize(tmp_hero) > 10000:
            os.replace(tmp_hero, hero_mp4)
            print(f"hero.mp4 optimized to {os.path.getsize(hero_mp4)/1024/1024:.2f} MB")

    # Clean temporary mp4 files if any
    for tmp in ['hero_720.mp4', 'hero_compressed.mp4', 'hero_crf28.mp4', 'newvideo_compressed.mp4']:
        tp = os.path.join(base_dir, tmp)
        if os.path.exists(tp):
            os.remove(tp)

    # 3. Optimize Images
    max_dim = 1600
    for root, dirs, files in os.walk(base_dir):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext not in ['.png', '.jpg', '.jpeg', '.webp']:
                continue
            
            filepath = os.path.join(root, f)
            orig_size = os.path.getsize(filepath)
            
            try:
                with Image.open(filepath) as img:
                    w, h = img.size
                    is_resized = False
                    
                    if max(w, h) > max_dim:
                        ratio = max_dim / max(w, h)
                        new_size = (int(w * ratio), int(h * ratio))
                        img = img.resize(new_size, Image.Resampling.LANCZOS)
                        is_resized = True

                    # Generate / update WebP version
                    webp_path = os.path.splitext(filepath)[0] + '.webp'
                    
                    if ext in ['.jpg', '.jpeg']:
                        # Progressive JPEG
                        if img.mode in ('RGBA', 'P', 'LA'):
                            img_rgb = img.convert('RGB')
                        else:
                            img_rgb = img
                        
                        tmp_out = filepath + '.tmp'
                        img_rgb.save(tmp_out, 'JPEG', quality=82, optimize=True, progressive=True)
                        if os.path.getsize(tmp_out) < orig_size or is_resized:
                            os.replace(tmp_out, filepath)
                        else:
                            os.remove(tmp_out)
                        
                        # Generate WebP companion
                        tmp_webp = webp_path + '.tmp'
                        img_rgb.save(tmp_webp, 'WEBP', quality=80, method=6)
                        if os.path.exists(webp_path):
                            if os.path.getsize(tmp_webp) < os.path.getsize(webp_path) or is_resized:
                                os.replace(tmp_webp, webp_path)
                            else:
                                os.remove(tmp_webp)
                        else:
                            os.replace(tmp_webp, webp_path)

                    elif ext == '.webp':
                        tmp_webp = filepath + '.tmp'
                        img.save(tmp_webp, 'WEBP', quality=80, method=6)
                        if os.path.getsize(tmp_webp) < orig_size or is_resized:
                            os.replace(tmp_webp, filepath)
                        else:
                            os.remove(tmp_webp)

                    elif ext == '.png':
                        # Check transparency
                        has_alpha = False
                        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                            has_alpha = True
                        
                        tmp_webp = webp_path + '.tmp'
                        img.save(tmp_webp, 'WEBP', quality=80, method=6)
                        if not os.path.exists(webp_path) or os.path.getsize(tmp_webp) < os.path.getsize(webp_path) or is_resized:
                            os.replace(tmp_webp, webp_path)
                        else:
                            os.remove(tmp_webp)

                        # Optimize PNG
                        tmp_png = filepath + '.tmp'
                        if not has_alpha and orig_size > 300 * 1024:
                            # Large photographic PNG without alpha: quantize to 256 colors
                            img_q = img.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
                            img_q.save(tmp_png, 'PNG', optimize=True)
                        else:
                            img.save(tmp_png, 'PNG', optimize=True, compress_level=9)

                        if os.path.getsize(tmp_png) < orig_size or is_resized:
                            os.replace(tmp_png, filepath)
                        else:
                            os.remove(tmp_png)

            except Exception as e:
                print(f"Skipping {f}: {e}")

if __name__ == '__main__':
    process_all_assets()
