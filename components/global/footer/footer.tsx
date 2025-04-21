import PortableText from "@/components/portableText/portable-text";
import type { SettingsQueryResult } from "@/typegen/sanity.fragment-types";

interface FooterProps {
  data: SettingsQueryResult;
}
export default function Footer(props: FooterProps) {
  const { data } = props;

  return (
    <footer className="bg-primary py-12">
      <div className="container flex gap-10 text-white">
        {data?.footerModules?.map((module) => {
          if (!module.text) {
            return null;
          }
          return <PortableText key={module._key} value={module.text} />;
        })}
      </div>
    </footer>
  );
}
