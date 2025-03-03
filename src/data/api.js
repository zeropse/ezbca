import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;

const SUBJECT_FOLDERS = {
  "aptitude-notes": "1wAFAXJ568T3-MGxCsGkCdFBfJGQga66f",
  "spm-notes": "14W6O5KV3X56SOlpDuHP_X9r9APvK7x_0",
  "cloud-computing-notes": "11uqx8jwmp5bCt-e4swcftUftBq2boFuS",
  "professional-ethics-notes": "10tDwCN6x_O6bmRhC_o6dFt5OsdTUTJZn",
  "casd-notes": "110nkI76KiyWv04w5IWsySt1XbzfNQodB",
  "casd-lab-notes": "1Y85YMjaGioEtspeQugwXW0gegia6kDPd",
  "data-science-r-notes": "14Od6FeReyuAShOXywJlFubVWrxuD8zzj",
  "data-science-r-lab-notes": "1GHheRxHWsr-XaDzzEq6NmsDmRRD6xuZm",
};

export const fetchDriveFiles = async (subjectSlug) => {
  const folderId = SUBJECT_FOLDERS[subjectSlug];
  if (!folderId) return [];

  try {
    const response = await axios.get(
      "https://www.googleapis.com/drive/v3/files",
      {
        params: {
          q: `'${folderId}' in parents and trashed = false`,
          key: API_KEY,
          fields: "files(id, name, createdTime)",
          orderBy: "createdTime desc",
        },
      }
    );

    return response.data.files.reverse().map((file) => ({
      title: file.name,
      link: `https://drive.google.com/file/d/${file.id}/view?usp=sharing`,
    }));
  } catch (error) {
    console.error(
      `Error fetching files for ${subjectSlug}:`,
      error.response?.data || error.message
    );
    return [];
  }
};
