import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import ComplexGrid from './ComplexGrid';
import CarCard from './CarCard';
import { Link } from 'react-router-dom';


const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#00c853'
		}
	}
})

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://github.com/rivas1">
        Dopamine
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    
    
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: '#00c853',

  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: 'red',
    padding: '0 30px',
    boxShadow: '0 5px 50px 0px rgba(255, 255, 255, .3)',
    
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,

  },
  mainFeatureditem: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeatureditemContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },


  card: {
    // colors
    $colors: 'red',
    display: 'flex',
    // borderLeft: '15px solid pink',
    borderLeft: '15px solid',
    // borderLeftColor: `${theme.palette.divider}`,
    
    
  },
  cardDetails: {
    // flex: 1,
  },
  // Card picture
  cardMedia: {
    minWidth: 220,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const sections = [
  'CBD',
  'MERCH',
  'ABOUT',
  'CONTACT',
  'PARTNERS',
  'SOCIAL',
];


const featuredItems = [
  {
    title: '2004 FORD MUSTANG COBRA',
    rating: '5 OUT OF 5',
    price: '$25,599.00',
    description:
      'One of the most powerful Mustangs ever made, 390HP/390TQ',
    color: 'red',
  },
  {
    title: '2017 FORD MUSTANG GT',
    rating: '5 OUT OF 5',
    price: '$36,000.00',
    description:
      'With the DOHC design, Ford squeezed out 435HP/400TQ from a 5.0L',
    color: 'green',
  },
  {
    title: '2017 CHEVROLET CAMARO SS',
    rating: '5 OUT OF 5',
    price: '$41,000.00',
    description:
      'Old-schoool push-rod design making 455HP/455TQ from its 6.2L',
    color: 'blue',
  },
  {
    title: '2017 YAMAHA FZ-10',
    rating: '5 OUT OF 5',
    price: '$13,000.00',
    description:
      'Weighing in only at 463 lbs, this two-wheeler makes 160HP/85TQ',
    color: 'yellow',
  },
];



const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Blog() {
  const classes = useStyles();

  return (
   <MuiThemeProvider theme = {theme} > 
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
         
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            S P A R K
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button component={Link} to="/signin" variant="outlined" size="small">
            Sign in
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Button
              color='#00c853'
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Button>
          ))}
        </Toolbar>
        <main>
          {/* Main featured item */}
          <Paper className={classes.mainFeatureditem}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeatureditemContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    MIKE RELEASES 3 NEW STRANDS OF CANNABIS
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    MIKE TYSON&apos;S CANNABIS BRAND IS UNDISPUTED 87 JUST LIKE THE LEGENDARY HEAVYWEIGHT
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    READ MORE
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured item */}
          {/* Marketplace Grid */}
          <Grid container spacing={1} className={classes.cardGrid}>
            {featuredItems.map(item => (
              <Grid item key={item.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {item.rating}
                       </Typography>
                        <Typography variant="subtitle1" color="primary">
                          {item.price}
                       </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {item.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          ADD TO CART
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://www.alfaromeoraleigh.com/assets/stock/colormatched_02/white/640/cc_2017foc050002_02_640/cc_2017foc050002_02_640_j7.jpg"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured items */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <CarCard/>
              <Divider />
              
            </Grid>
            {/* End main content */}

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  <b>Spark</b> is the only platform that will keep you in the loop for your favorite favorite trees.
                </Typography>
              </Paper>
              
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Link display="block" variant="body1" href= "#" key={network}>
                  {network}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            S P A R K
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
    </MuiThemeProvider>
  );
}