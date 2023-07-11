import { useState, useEffect } from 'react';
import { MemberItem } from '../memberItem/member-item';
import { FAMILY_ROOT_MEMBER } from '../../constants';
import { SearchBar } from './components/search-bar';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Item } from '../../types';
import { findNodeByName, deleteNodeById } from '../../utils';
export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [member, setMember] = useState<Item | undefined>(FAMILY_ROOT_MEMBER);
  const [deletingId, setDeletingId] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!searchTerm) {
      setMember(FAMILY_ROOT_MEMBER);
    } else {
      const filteredMember = findNodeByName(FAMILY_ROOT_MEMBER, searchTerm);
      setMember(filteredMember);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (deletingId) {
      const newMember = deleteNodeById(FAMILY_ROOT_MEMBER, deletingId);
      setMember(newMember);
      setDeletingId(undefined);
      setSearchTerm('');
    }
  }, [deletingId]);

  return (
    <div className='h-full w-full flex flex-col gap-5 p-6'>
      <div className='flex items-center justify-between w-full'>
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      {member && <MemberItem member={member} setDeletingId={setDeletingId} />}
    </div>
  );
}
