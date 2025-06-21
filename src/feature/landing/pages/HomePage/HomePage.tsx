import { Divider, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import { fetchAllVideos } from "../../redux/actions/fetchVideosAction";
import { LandingDispatch } from "../../redux/types/LandingDispatch";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const HomePage = () => {
  const dispatch = useDispatch<LandingDispatch>();

  const videos = useSelector(
    (state: RootState) => state.landing.fetchVideos.api.data?.videos
  );

  useEffect(() => {
    dispatch(fetchAllVideos());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <List sx={{ width: "100%", maxWidth: 1200, margin: "auto" }}>
        {videos?.map((video) => (
          <React.Fragment key={video._id}>
            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
              {/* Thumbnail */}
              <Box
                component="img"
                src={video.thumbnail}
                alt={video.title}
                sx={{
                  width: { xs: 160, sm: 240 },
                  height: { xs: 90, sm: 135 },
                  borderRadius: 1,
                  objectFit: "cover",
                  mr: 2,
                }}
              />

              {/* Video Info */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1" fontWeight="bold" noWrap>
                  {video.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {video?.ownerDetails?.fullName || "Unknown Channel"}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {video.views ?? "0"} views •{" "}
                  {new Date(video.updatedAt).toLocaleDateString()}
                </Typography>
              </Box>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
