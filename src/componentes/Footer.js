import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Footer() {
        
        const [date , setDate] = useState();
    
        const getYear = () =>  setDate(new Date().toLocaleDateString())
    
    
        useEffect(() => {
            getYear();
        }, [])

        return (
            <>
            &copy; Copyright - {date}
            </>
        );
    }

export default Footer;
