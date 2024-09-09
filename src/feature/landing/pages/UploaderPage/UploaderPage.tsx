import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { uploadVideo } from "../../redux/actions/uploadVideoAction";
import { LandingDispatch } from "../../redux/types/LandingDispatch";

export const UploaderPage = () => {
  const dispatch = useDispatch<LandingDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const desc = data.get("desc")?.toString();
    const video = data.get("video") as File;
    const thumbnail = data.get("thumbnail") as File;

    dispatch(
      uploadVideo({
        title: title,
        description: desc,
        video: video,
        thumbnail: thumbnail,
      })
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Title"
        name="title"
        autoFocus
        variant="filled"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="desc"
        label="Description"
        name="desc"
        autoComplete="desc"
        autoFocus
        multiline
        variant="filled"
      />
      <Typography variant="h6" component="h6">
        Upload Thumbnail
      </Typography>
      <TextField
        type="file"
        margin="normal"
        required
        fullWidth
        id="thumbnail"
        name="thumbnail"
        autoFocus
        variant="outlined"
      />
      <Typography variant="h6" component="h6">
        Upload Video
      </Typography>
      <TextField
        type="file"
        margin="normal"
        required
        fullWidth
        id="video"
        name="video"
        autoFocus
        variant="outlined"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Publish
      </Button>
    </Box>
  );
};
