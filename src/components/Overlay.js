import React,{Component} from 'react';
import { Grid, Paper, Typography, Divider, FormControl, InputLabel, MenuItem, Select, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { setSelectValue,handelButtonClick } from '../actions';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const styles = theme => ({
    paper: {
        padding:2,
        textAilgn: 'center',
        minWidth: '200px',
        width: '500px',
        padding: '15px',
        marginTop: '15px',
        height: '100%'
    },
    headerTypo: {
        marginBottom: '15px'
    },
    formControl:{
        margin: theme.spacing(1),
        minWidth: 180,
    },
    logoSize: {
        width: '250px',
        margin: 'auto',
        border: '2px solid black'
    },
    container: {
        alignItems: 'center'
    },
    buttonClass:{
        height: '55px'
    },
    space: {
        marginBottom: '30px'
    },
    textline: {
        textDecoration: 'underline'
    }
})

class Overlay extends Component {

     handleChangeSelect=(event)=> {
      this.props.setSelectValue(event.target.value)
    }

     validateSelect(){
        const { classes } = this.props;
        if(this.props.selectValue === ""){
           return <Button  disabled={true} variant="contained" color="primary" className={classes.buttonClass}>
                    Start the Game
                </Button>
        }
        else{
         return <Button  disabled={false} onClick={this.props.handelButtonClick} variant="contained" color="primary" className={classes.buttonClass}>
                    Start the Game
                </Button>
        }
    }

     createSelectItems(){
        let items = [];
        for (let i = 1; i <= 10; i++) {
            items.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
        }
        return items;
    }

    render(){    
    const { classes } = this.props;

    return(
        <Grid container direction="row" justify="center">
        <Paper className={classes.paper} elevation={2}>
        <Grid container direction="row" justify="center">
            <Grid item className={classes.space}>
                <Typography className={classes.headerTypo} variant="h5" >
                    Welcome to the Rock - Paper - Scissors game
                </Typography>   
                <Divider />
            </Grid>
            <Grid item className={classes.space}>
            <Grid container className={classes.container} direction="row" justify="center">
            <Grid item >
                <Typography className={classes.headerTypo} variant="h6" >
                    Please choose a number of Rounds
                </Typography> 
            </Grid>  
            <Grid item >
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-simple">
                    Select a number
                    </InputLabel>
                    <Select
                        value={this.props.selectValue}
                        onChange={this.handleChangeSelect}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-simple',
                        }}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                   {this.createSelectItems()}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                {this.validateSelect()}
            </Grid>
            </Grid>
            </Grid>
           
        </Grid>
        <Divider />

        <Grid item>
        <Grid container direction="row" justify="center">
        <Grid item>
            <Typography className={classes.textline}>
            GameRules
            </Typography>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ArrowForwardIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="stone beats scissors"  />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ArrowForwardIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="scissors beats paper"  />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ArrowForwardIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="paper beats stone"  />
                </ListItem>
             </List>
        </Grid>
        <Grid item>
            <img className={classes.logoSize} src={ require('../assets/img/logo.png') } />
        </Grid>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
    );
                    }
}

const mapStateToProps = state => {
    return {
       selectValue: state.overlayReducer.selectValue
    };
};
export default connect(mapStateToProps, {setSelectValue,handelButtonClick} )(withStyles(styles)(Overlay));
