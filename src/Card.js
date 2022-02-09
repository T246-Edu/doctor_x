import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardImage({ path, title, content, url, alt }) {
  return (
    <div id="Cards">
      <Card
        sx={{
          maxWidth: 500,
        }}
        style={{
          border: "1px solid rgb(255, 0, 255)",
          borderRadius: "20px",
          margin: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          alt={alt}
          image={path}
          height="320px"
          style={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => window.open(url)}>
            Learn More
          </Button>
          <Button size="small">Ok</Button>
        </CardActions>
      </Card>
    </div>
  );
}
