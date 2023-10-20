import mime from 'mime';
import {getAwsUrl} from '../services/AuthServices';
import {getProfilePicture} from '../services/AuthServices';
import {
  DownloadImageArgs,
  DownloadImageResponse,
  UploadImageResponse,
} from '../types/ProfilePictureTypes';

export const handleImageUpload = async (
  selectedImage: string,
  folder: string = 'avatar',
): Promise<UploadImageResponse | undefined> => {
  const fileKey = `${new Date().toISOString()}-${selectedImage
    .split('/')
    .pop()!}`;
  const mimeType =
    mime.getType(fileKey?.split('.').pop()!) || 'application/octet-stream';

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

  return response as UploadImageResponse;
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
  } as DownloadImageArgs);

  return (resizedImage as DownloadImageResponse)?.url || null;
};
