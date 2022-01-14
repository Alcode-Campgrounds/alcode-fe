import * as React from "react";
import { create } from  'react-test-renderer'
import {
  MemoryRouter,
  Routes,
  Route
} from "react-router-dom";
import { UserProvider } from '../../context/UserContext';
import SignUp from '../../views/login/SignUp';

describe("private route", () => {
  it("renders sign in route", () => {
 let renderer = create(
     <UserProvider>
      <MemoryRouter initialEntries={["/signin"]}>
        <Routes>
            <Route path="signin" element={<SignUp hasUser />}/>
         
        </Routes>
      </MemoryRouter>
      </UserProvider>
    );

    expect(renderer.toJSON()).toMatchSnapshot();

  });
});

// NEED TO GUIDE BROWSER THROUGH THE SIGN IN PROCESS TO RENDER A SEARCH PAGE 