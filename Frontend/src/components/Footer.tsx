function Footer() {
  const classStyle: string = " underline underline-offset-4";
  return (
    <div>
      <div className=" text-[0.9rem] p-3 pb-5">
        Built by{" "}
        <a className={classStyle} href="https://ui.shadcn.com/">
          shadcn
        </a>
        . Hosted on{" "}
        <a className={classStyle} href="https://vercel.com/">
          Vercel
        </a>
        . Illustrations by{" "}
        <a className={classStyle} href="https://github.com/Shashivadan">
          Shashi
        </a>
        . The source code is available on{" "}
        <a
          className={classStyle}
          href="https://github.com/Shashivadan/FireTrack"
        >
          GitHub
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;
