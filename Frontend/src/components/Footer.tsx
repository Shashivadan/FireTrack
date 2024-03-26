function Footer() {
  const classStyle: string = " underline underline-offset-4";
  return (
    <div>
      <div className=" text-sm md:text-[0.9rem] p-3 pb-5">
        Built by{" "}
        <a className={classStyle} target="_blank" href="https://ui.shadcn.com/">
          shadcn
        </a>
        . Hosted on{" "}
        <a className={classStyle} target="_blank" href="https://vercel.com/">
          Vercel
        </a>
        . Illustrations by{" "}
        <a
          className={classStyle}
          target="_blank"
          href="https://github.com/Shashivadan"
        >
          Shashi
        </a>
        . The source code is available on{" "}
        <a
          target="_blank"
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
