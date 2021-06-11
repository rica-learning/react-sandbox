import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Book {
  _id: string;
  title: string;
  author: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "row",
      display: "flex",
      flexWrap: "wrap",
      m: 2,
      alignItems: "center"
    },
    card: {
      maxWidth: 270,
      margin: 5
    },
    media: {
      height: 140
    }
  })
);

export default function BookList() {
  const classes = useStyles();
  const [data, setData] = useState<Book[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://1fe1m.sse.codesandbox.io/api/books")
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1> Loading . . </h1>;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <Box m={2} className={classes.root}>
      {data.map((item: Book) => (
        <Card key={item._id} className={classes.card}>
          <CardActionArea component={Link} to={item._id}>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
