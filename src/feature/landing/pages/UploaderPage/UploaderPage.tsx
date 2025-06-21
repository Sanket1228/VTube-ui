import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import { uploadVideo } from "../../redux/actions/uploadVideoAction";
import { LandingDispatch } from "../../redux/types/LandingDispatch";

export const UploaderPage = () => {
  const dispatch = useDispatch<LandingDispatch>();

  const userId = useSelector(
    (state: RootState) => state.auth.login.api.data?.user._id
  );

  const [thumbnailName, setThumbnailName] = useState("");
  const [videoName, setVideoName] = useState("");

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
        userId: userId,
      })
    );
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        mt: 4,
        borderRadius: 3,
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Upload New Video
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Video Title"
          name="title"
          variant="outlined"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          minRows={4}
          id="desc"
          label="Description"
          name="desc"
          variant="outlined"
        />

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" mb={1}>
              Upload Thumbnail
            </Typography>
            <Button variant="contained" component="label" fullWidth>
              {thumbnailName || "Choose Thumbnail"}
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                hidden
                accept="image/*"
                onChange={(e) =>
                  setThumbnailName(e.target.files?.[0]?.name || "")
                }
              />
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" mb={1}>
              Upload Video
            </Typography>
            <Button variant="contained" component="label" fullWidth>
              {videoName || "Choose Video File"}
              <input
                type="file"
                name="video"
                id="video"
                hidden
                accept="video/*"
                onChange={(e) => setVideoName(e.target.files?.[0]?.name || "")}
              />
            </Button>
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 4, fontWeight: "bold", py: 1.5 }}
        >
          Publish Video
        </Button>
      </Box>
    </Paper>
  );
};
