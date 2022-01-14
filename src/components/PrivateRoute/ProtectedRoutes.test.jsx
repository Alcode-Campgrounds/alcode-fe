import * as React from "react";
import { SignUp } from '../../views/login/SignUp'
import { create } from  'react-test-renderer'
import {
  MemoryRouter,
  Routes,
  Route
} from "react-router-dom";
import { UserProvider } from '../../context/UserContext';

describe("private route", () => {
  it("renders sign in route", () => {
 let renderer = create(
     <UserProvider>
      <MemoryRouter>
        <Routes>
            <Route path="/signin" element={<SignUp />}>
          </Route>
        </Routes>
      </MemoryRouter>
      </UserProvider>
    );

    expect(renderer.toJSON()).toMatchSnapshot();

  });
});

// NEED TO GUIDE BROWSER THROUGH THE SIGN IN PROCESS TO RENDER A SEARCH PAGE 