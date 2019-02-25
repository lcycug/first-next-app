import Head from "next/head";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import NProgress from "nprogress";
import paths from "./paths";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default withRouter(({ router, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <ul>
        {paths.map(path => {
          if (path.href === router.pathname) {
            return (
              <li key={path.href}>
                <span>{path.label}</span>
              </li>
            );
          }
          return (
            <li key={path.href}>
              <Link prefetch href={path.href}>
                <a>{path.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
});
