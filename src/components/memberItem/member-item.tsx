import { useState } from 'react';
import { Item } from '../../types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Popconfirm } from 'antd';

interface MemberItemProps {
  member: Item;
  setDeletingId: (id: number | undefined) => void;
}

const ROOT_MEMBER_ID = 0;

export const MemberItem = (props: MemberItemProps) => {
  const { member, setDeletingId } = props;
  const { id, name, children } = member;
  const [isShowDelete, setIsShowDelete] = useState(false);

  const deleteFn = () => {
    setDeletingId(id);
  }

  return (
    <div className='relative flex flex-col w-full flex-shrink-1 gap-2'>
      <div className='flex items-center justify-center h-16 w-full border border-blue-900 rounded-lg hover:bg-blue-200 cursor-pointer'
        onMouseEnter={() => {
          setIsShowDelete(true);
        }}
        onMouseLeave={() => {
          setIsShowDelete(false);
        }}>
        {isShowDelete && id !== ROOT_MEMBER_ID && <div className='absolute -right-2 -top-2 flex items-center justify-center h-4 w-4 rounded-[99px] bg-red-600'
          onClick={()=>{
            deleteFn();
          }}>
          <XMarkIcon className='h-3 w-3 text-white' />
        </div>}
        {name}
      </div>
      <div className='flex justify-between gap-2'>
        {(children || []).map((child) => {
          return <MemberItem key={child.id} member={child} setDeletingId={setDeletingId} />
        })}
      </div>
    </div>
  )
}
