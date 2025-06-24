import Image from "next/image";
import { IntegrationType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";

export default function IntegrationColumns(props: {
  integrations: IntegrationType[];
  className?: string;
}) {
  const { integrations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {props.integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={`${integration.name} icon`}
              className="size-24"
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}
