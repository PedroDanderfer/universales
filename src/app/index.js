import { render } from 'react-dom';
import React, { Component } from 'react';

import Header from './header'
import Main from './main'
import Footer from './footer'


render(<Header/>, document.getElementById("header"));
render(<Main/>, document.getElementById("main"));
render(<Footer/>, document.getElementById("footer"));