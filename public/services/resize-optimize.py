import os
from PIL import Image

def convert_png_to_webp(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.jpg'):
                file_path = os.path.join(root, file)
                # Open the image
                with Image.open(file_path) as img:
                    # Resize the image to 1920x1080 if it is not already in that size
                    img = img.resize((1920, 1080), Image.LANCZOS)

                    # Create new file name with .webp extension
                    new_file_path = os.path.splitext(file_path)[0] + ".webp"
                    
                    # Save the image as webp
                    img.save(new_file_path, "webp")

                # Remove the old .png file
                os.remove(file_path)
                print(f"Converted and removed: {file_path}")

if __name__ == "__main__":
    # Replace '/path/to/your/directory' with the directory you want to traverse
    target_directory = './'
    convert_png_to_webp(target_directory)
