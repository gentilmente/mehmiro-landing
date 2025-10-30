# GitHub Pages Deployment

## 🔄 Deploy Updates

To deploy updates after making changes:

1. Make your changes
2. Run: `npm run build`
3. Run: `git add .`
4. Run: `git commit -m "Update deployment"`
5. Run: `git push origin main`
6. Run: `git subtree push --prefix=dist origin gh-pages`

## 🧪 Testing

After deployment, wait 2-5 minutes for GitHub Pages to update, then visit:
https://gentilmente.github.io/mehmiro-landing/

https://mehmiro.com

## 🔧 Troubleshooting

### Non-Fast-Forward Push Errors

If you encounter errors like:

```
! [rejected] <commit> -> gh-pages (non-fast-forward)
error: failed to push some refs to 'https://github.com/gentilmente/mehmiro-landing.git'
hint: Updates were rejected because the remote contains work that you do not have locally.
```

This happens because GitHub Pages may add commits to the `gh-pages` branch (such as CNAME files for custom domains) that diverge from your local subtree history.

**To resolve:**

1. Fetch the latest remote changes:

   ```bash
   git fetch origin
   ```

2. Create a subtree split of your dist folder:

   ```bash
   git subtree split --prefix=dist --branch temp-gh-pages
   ```

3. Force push the subtree to overwrite the remote branch:

   ```bash
   git push origin temp-gh-pages:gh-pages --force
   ```

4. Clean up the temporary branch:
   ```bash
   git branch -D temp-gh-pages
   ```

This ensures the `gh-pages` branch contains only the build artifacts from your `dist/` directory, properly aligned with your deployment history.
