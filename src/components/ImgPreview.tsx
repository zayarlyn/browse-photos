import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useCtx } from '../Context';
import { CtxTypes } from '../Types';
import ImgDetail from './ImgDetail';

interface Props {
  img: any;
  shouldSpan: boolean;
}

const ImgPreview: React.FC<Props> = ({ img, shouldSpan }) => {
  const { imgDetail, dispatchImgDetail } = useCtx() as CtxTypes;

  return (
    <>
      <div
        className={`${shouldSpan ? 'row-span-2' : ''}
       bg-gray-400 overflow-hidden relative group`}
      >
        <img
          onClick={() => dispatchImgDetail({type: 'ON', value: {url: img.urls.regular, }})}
          className={`${shouldSpan ? 'row-span-2' : ''} cursor-pointer h-full outline object-cover`}
          src={img.urls.regular}
          alt={img.description ?? img.alt_description}
        />
        <div className='opacity-0 group-hover:opacity-100 absolute text-gray-200 md:py-3 bottom-0 right-0 bg-[#66666685] h-auto w-full px-3'>
          <p>{img.alt_description}</p>
          <div className='flex items-center justify-end gap-4 mt-1 py-1 text-sm'>
            <p className='flex items-center gap-1'>
              <Icon className='text-red-500 w-6 h-6' icon='ant-design:heart-filled' />
              <span className='text-white mt-[1px]'>{img.likes}</span>
            </p>
            <a
              className='text-right leading-4 underline hover:text-blue-300'
              href={img.user.links.html}
              rel='noreferrer'
              target='_blank'
            >
              {img.user.name}
            </a>
          </div>
        </div>
      </div>
      {/* {isActive && <ImgDetail />} */}
    </>
  );
};

export default ImgPreview;