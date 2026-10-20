# React + Vite

## Deploying to a shared host

The GitHub Actions workflow builds the Vite app and deploys `dist/` to the shared
host over FTPS whenever changes are pushed to `main`. You can also start a
deployment from the Actions tab with **Deploy to shared host** → **Run workflow**.

Configure these repository settings under **Settings → Secrets and variables → Actions**:

| Name | Type | Description |
| --- | --- | --- |
| `FTP_SERVER` | Secret | FTP hostname supplied by your hosting provider |
| `FTP_USERNAME` | Secret | FTP account username |
| `FTP_PASSWORD` | Secret | FTP account password |
| `FTP_SERVER_DIR` | Variable | Destination directory, including its trailing slash (for example, `/public_html/`) |

The workflow uses FTPS to protect credentials in transit. Confirm that FTPS is
enabled by your host and that the FTP account can write to the configured
directory. Point the account at the intended web root or use the exact
destination path provided by your hosting provider.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
