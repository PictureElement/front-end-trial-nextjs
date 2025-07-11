import Link from "next/link";
import { linkSchema } from "@/lib/schemas";
import z from "zod/v4";
import { DynamicIcon } from 'lucide-react/dynamic';

type LinkProps = z.infer<typeof linkSchema> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function BtnOutlined(props: LinkProps) {
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
        px-10
        md:px-14
        h-10
        md:h-15
        leading-none
        rounded-[30px]
      text-white
        transition
        hover:brightness-90
        focus:ring-2
        focus:outline-none
        uppercase
        border
        border-white
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
