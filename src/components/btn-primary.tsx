import Link from "next/link";
import { linkSchema } from "@/lib/schemas";
import z from "zod/v4";
import { DynamicIcon } from 'lucide-react/dynamic';

type LinkProps = z.infer<typeof linkSchema> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function BtnPrimary(props: LinkProps) {
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
      className={`bg-red-500 ${className ?? ""}`}
      {...rest}
    >
      {label}
      {showIcon && lucideIconName && (
        <DynamicIcon name={lucideIconName} color="red" size={48} />
      )}
    </Link>
  );
}
