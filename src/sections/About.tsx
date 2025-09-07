import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import myVisitedPlacesImage from '@/assets/images/myVisitedPlaces.png';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import Image from 'next/image';
// import TypeScriptIcon from '@/assets/icons/typescript.svg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import MySQLIcon from '@/assets/icons/mysql.svg';
import ReactIcon from '@/assets/icons/react.svg';
import CppIcon from '@/assets/icons/cpp.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import PythonIcon from '@/assets/icons/python.svg';
import JavaIcon from '@/assets/icons/java.svg';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'Java',
    iconType: JavaIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'MySQL',
    iconType: MySQLIcon,
  },
  {
    title: 'C++',
    iconType: CppIcon,
  },
];

const hobbies = [
  {
    title: 'Boxing',
    emoji: '🥊',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Skiing',
    emoji: '⛷️',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Eating',
    emoji: '🍛',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Traveling',
    emoji: '🌏',
    left: '35%',
    top: '40%',
  },
  {
    title: 'A Cappella',
    emoji: '🎶',
    left: '20%',
    top: '70%',
  },
  {
    title: 'Piano',
    emoji: '🎹',
    left: '60%',
    top: '60%',
  },
]

export const AboutSection = () => {
  return (
    <div id='about' className='py-20'>
      <div className='container'>
        <SectionHeader title='A Glimpse Into My World' eyebrow='About Me' description='Learn about me!' />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            <Card className='h-[320px] md:col-span-2 p-0 flex flex-col'>
              <CardHeader title='My Travels' description="The places I've been!" className='px-6 py-6' />
              <div className='flex-1 relative'>
                <Image src={myVisitedPlacesImage} alt="Visited places map" className='h-full w-full object-cover' />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3'>
              <CardHeader
                title='My Toolbox'
                description="The tech I've used:"
                className=''
              />
              <ToolboxItems items={toolboxItems} className='' itemsWrapperClassName='animate-move-left [animation-duration:30s]' />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassName='-translate-x-1/2 animate-move-right [animation-duration:20s]'
              />
            </Card>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3'>
              <CardHeader
                title='Beyond the Code'
                description="What I'm up to outside of work:"
                className='px-6 py-6'
              />
              <div className='relative flex-1'>
                {hobbies.map(hobby => (
                  <div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                  >
                    <span className='font-medium text-gray-950'>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2'>
              <Image src={mapImage} alt="map" className='h-full w-full object-cover' />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
              after:content-[''] after:inset-0 after:absolute after:outline after:outline-2 after-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image src={smileMemoji} alt="smiling memoji" className='size-20 mt-1' />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
