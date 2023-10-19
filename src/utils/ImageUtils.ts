import mime from 'mime';
import {getAwsUrl} from '../services/AuthServices';
import {getProfilePicture} from '../services/AuthServices';

export const handleImageUpload = async (
  selectedImage: string,
  folder: string = 'avatar',
) => {
  const fileKey = `${new Date().toISOString()}-${selectedImage.split('/').pop()!}`;
  const mimeType = mime.getType(fileKey?.split('.').pop()!) || 'application/octet-stream';

  if (!fileKey) return;

  const response = await getAwsUrl({
    fileName: fileKey,
    folder,
  });

  const {url} = response;
  const blob = await (await fetch(selectedImage)).blob();

  await fetch(url, {
    method: 'PUT',
    headers: {'Content-Type': mimeType},
    body: blob,
  });

  return response;
};


export const fetchResizedImage = async (
  fileName: string,
  width: number = 200,
  height: number = 200,
): Promise<string | null> => {
  const resizedImage = await getProfilePicture({
    fileName,
    height,
    width,
  });
  return resizedImage?.url || null;
};
