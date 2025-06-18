import Link from "next/link";
import { linkSchema } from "@/lib/schemas";
import z from "zod/v4";
// import { DynamicIcon } from 'lucide-react/dynamic';

type LinkProps = z.infer<typeof linkSchema> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function BtnContained(props: LinkProps) {
  const {
    label,
    url,
    openLinkInNewTab,
    showIcon,
    lucideIconName,
    className,
    ...rest
  } = props;

  return (
    <Link
      href={url}
      target={openLinkInNewTab ? "_blank" : "_self"}
      rel={openLinkInNewTab ? "noopener noreferrer" : undefined}
      className={`
        inline-flex
        justify-center
        items-center
        px-[57px]
        h-15
        leading-none
        rounded-[30px]
      text-black
        transition
      bg-primary
        hover:brightness-105
        focus:ring-2
        focus:outline-none
        w-full sm:w-auto
        uppercase
        ${className ?? ""}
      `}
      {...rest}
    >
      {label}
      {/* {showIcon && lucideIconName && (
        <DynamicIcon className="h-[1em] w-[1em] ms-1" name={lucideIconName} />
      )} */}
    </Link>
  );
}
