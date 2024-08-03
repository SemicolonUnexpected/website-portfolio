import { Image } from "@nextui-org/image";
import { IconSvgProps } from "@/types";
import NavigatableCard from "@/components/navigatable-card";

interface ProjectCardProps {
  title: string;
  text: string;
  route: string;
  imageSrc?: string;
  alt?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, route, imageSrc="", alt=""}) => {
  return (
    <NavigatableCard className="max-w-5xl h-96 w-full md:h-48" route={route}>
      <div className="flex flex-col md:flex-row gap-4">
        {imageSrc &&
          <div className="relative basis-1/2">
            <Image src={imageSrc} alt={alt} width="100% md:auto" className="object-cover basis-1/2 max-h-48 md:max-h-[10.5rem]"/>
          </div>
        }
        <div className={imageSrc &&"basis-1/2"}>
          <h1 className="font-semibold text-xl">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </NavigatableCard>
  );
};

interface IconProjectCardProps {
  title: string;
  text: string;
  route: string;
  IconComponent: React.ComponentType<IconSvgProps>;
}


export const IconProjectCard: React.FC<IconProjectCardProps> = ({ title, text, route, IconComponent }) => {
  return (
    <NavigatableCard className="max-w-5xl h-96 w-full md:h-48" route={route}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p>{text}</p>
        </div>

        <div>
          <IconComponent size={120}/>
        </div>

      </div>
    </NavigatableCard>
  );
};
