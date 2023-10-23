import React from 'react';
import {TouchableOpacity} from 'react-native';
import LikedIcon from '../../assets/svg/LikedIcon';
import NotLikedIcon from '../../assets/svg/NotLikedIcon';
import {
  useDeleteLikeMutation,
  usePostLikeMutation,
} from '../../hooks/LikeUnlikeMutations';

interface Props {
  postId: number;
  hasLiked: boolean;
  setHasLiked: (hasLiked: boolean) => void;
  postRefetch: any;
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
      try {
        await deleteLikeMutation.mutateAsync(postId);
        setHasLiked(false);
        postRefetch();
      } catch (error: any) {
        if (error.response.status === 403) {
        }
      }
    } else {
      try {
        await postLikeMutation.mutateAsync(postId);
        setHasLiked(true);
        postRefetch();
      } catch (error: any) {
        if (error.response.status === 403) {
          setHasLiked(true);
        }
      }
    }
  };

  return (
    <TouchableOpacity onPress={handleLikePress}>
      {hasLiked ? <LikedIcon /> : <NotLikedIcon />}
    </TouchableOpacity>
  );
};

export default LikeButton;
