import React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"

const styles = () =>
    createStyles({
        table: {
            minWidth: "85%",
        },
    });

class BasicTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            search: ""
        }

    }
    componentDidMount(){
        axios.get("https://randomuser.me/api/?results=25&nat=us").then(res => {
            console.log(res.data)
            this.setState({users: res.data.results})
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">DoB</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map((user) => (
            <TableRow key={user.name}>
              <TableCell component="th" scope="row">
                <img src = {user.picture.thumbnail}></img>
              </TableCell>
              <TableCell align="right">{user.name.first} {user.name.last}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.dob.date}</TableCell>
            </TableRow>
          ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default withStyles(styles)(BasicTable);
