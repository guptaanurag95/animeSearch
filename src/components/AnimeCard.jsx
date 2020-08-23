import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

function AnimeCard(props) {
  const [open, setOpen] = useState(false);

  let handleOpen = (e) => {
    setOpen(true);
  };
  let handleClose = (e) => {
    setOpen(false);
  };

  return (
    <div>
      <Card style={{ width: 300 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            style={{ height: 400 }}
            image={props.imageURL}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{
          maxWidth: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
        open={open}
        onClose={() => {
          handleClose();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #000",
              boxShadow: 5,
              padding: 1,
            }}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={6}>
                <img
                  src={props.imageURL}
                  style={{
                    width: "100%",
                  }}
                  alt="Not Found"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="body2" component="div">
                  {props.description}
                  <br />
                  <Link target="_blank" href={props.detailsURL}>
                    More Details...
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AnimeCard;
