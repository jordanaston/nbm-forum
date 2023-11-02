import React from 'react';
import {TouchableOpacity} from 'react-native';
import LikedIcon from '../../assets/svg/LikedIcon';
import NotLikedIcon from '../../assets/svg/NotLikedIcon';
import {
  useDeleteLikeMutation,
  usePostLikeMutation,
} from '../../hooks/mutations/LikeUnlikeMutations';
import {QueryObserverResult} from 'react-query';

interface Props {
  postId: number;
  hasLiked: boolean;
  setHasLiked: (hasLiked: boolean) => void;
  postRefetch: () => Promise<QueryObserverResult<unknown, unknown>>;
}

const LikeButton: React.FC<Props> = ({
  postId,
  hasLiked,
  setHasLiked,
  postRefetch,
}: Props) => {
  const postLikeMutation = usePostLikeMutation();
  const deleteLikeMutation = useDeleteLikeMutation();

  const handleLikePress = async () => {
    if (hasLiked) {
      await deleteLikeMutation.mutateAsync(postId);
      setHasLiked(false);
      postRefetch();
    } else {
      await postLikeMutation.mutateAsync(postId);
      setHasLiked(true);
      postRefetch();
    }
  };

  return (
    <TouchableOpacity onPress={handleLikePress}>
      {hasLiked ? <LikedIcon /> : <NotLikedIcon />}
    </TouchableOpacity>
  );
};

export default LikeButton;
