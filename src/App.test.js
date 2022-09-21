import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from './redux/store/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import GetUserDetails from './pages/getUserDetails';
import ShowUserDetails from './pages/showUserDetails';
test('renders app page', () => {
  render(<Provider store={store}>
            <App />
        </Provider>);
});

test('renders user form page', () => {
  render(<Provider store={store}>
            <Router>
            <GetUserDetails />
            </Router>
        </Provider>);

});

it('Input filed for firstName', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <GetUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('Enter First name')).toBeInTheDocument()
 });

 it('Input filed for lastname', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <GetUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('Enter Last name')).toBeInTheDocument()
 });

 it('Input filed for Email', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <GetUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('Enter Email')).toBeInTheDocument()
 });
 it('Input filed for Mobile', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <GetUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('Enter Mobile no')).toBeInTheDocument()
 });

 it('Select filed for gender', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <GetUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('choose')).toBeInTheDocument()
 });

 it('input filed for dob', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <GetUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('Enter DOB')).toBeInTheDocument()
 });

 it('submit button ', () => {
  const { getByText } = render(<Provider store={store}>
    <Router>
    <GetUserDetails />
    </Router>
</Provider>); 
  expect(getByText('Submit form')).toBeInTheDocument()
 });
 

test('renders date calculate and display result', () => {
  render(<Provider store={store}>
            <Router>
            <ShowUserDetails />
            </Router>
        </Provider>);
});

it('input field for start date', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <ShowUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('Start Date')).toBeInTheDocument()
 });

 it('input field for end date', () => {
  const { getByPlaceholderText } = render(<Provider store={store}>
    <Router>
    <ShowUserDetails />
    </Router>
</Provider>); 
  expect(getByPlaceholderText('End Date')).toBeInTheDocument()
 });

 it('submit button ', () => {
  const { getByText } = render(<Provider store={store}>
    <Router>
    <ShowUserDetails />
    </Router>
</Provider>); 
  expect(getByText('Submit')).toBeInTheDocument()
 });

 it('Back button ', () => {
  const { getByText } = render(<Provider store={store}>
    <Router>
    <ShowUserDetails />
    </Router>
</Provider>); 
  expect(getByText('Back')).toBeInTheDocument()
 });
 