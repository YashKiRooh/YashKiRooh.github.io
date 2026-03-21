# Marriage Proposal Website

A romantic, interactive proposal website built with HTML, CSS, and JavaScript.

## Hosting on GitHub Pages

1. **Create a new repository** on GitHub (e.g. `proposal-website`).

2. **Push this project** to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - proposal website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
   - Click **Save**

4. Your site will be live at:  
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Adding Music

Place your Golden Hour audio in the `audio/` folder as `golden-hour.mp3` (or `golden-hour.ogg`). Music starts when she clicks "Open my heart" and loops. Use the ♪ button (bottom-right) to pause or resume.

## Adding Your Photos

Place your photos in the `images/` folder with these names (`.jpeg` or `.jpg` both work):
- `1.jpeg` / `1.jpg` — First text (Feb 8)
- `2.jpeg` / `2.jpg` — First video call, blue dress (Feb 8)
- `3.jpeg` / `3.jpg` — First date at Starbucks (Feb 14)
- `4.jpeg` / `4.jpg` — First visit to her home (Feb 21)
- `5.jpeg` / `5.jpg` — First "I love you" moment (March 12)

If a photo fails to load, a fallback placeholder will appear.

## Customization

- Edit `index.html` to change the greeting, story dates, or messages
- Adjust colors in `css/styles.css` (see `:root` variables)
- The "Maybe later" button moves when hovered—a playful touch before she says yes!
