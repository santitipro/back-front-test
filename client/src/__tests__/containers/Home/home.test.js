import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../../containers/Home";
import { useProperties } from "../../../hooks/useProperties";

jest.mock("../../../hooks/useProperties");

describe("Test Home component", () => {
  const mockedUseProduct = useProperties;

  test("when fetch properties is loading", () => {
    mockedUseProduct.mockImplementation(() => ({ isLoading: true }));

    render(<Home />);

    expect(screen.getByText(/Loading properties.../i)).toBeInTheDocument();
    expect(useProperties).toHaveBeenCalledTimes(1);
  });

  test("when fetch properties has error", () => {
    mockedUseProduct.mockImplementation(() => ({
      isLoading: false,
      error: true,
    }));

    render(<Home />);

    expect(
      screen.getByText(/Error loading properties.../i)
    ).toBeInTheDocument();
    expect(useProperties).toHaveBeenCalledTimes(1);
  });

  test("when fetch properties is success", () => {
    mockedUseProduct.mockImplementation(() => ({
      isLoading: false,
      error: false,
      data: { properties: [] },
    }));

    render(<Home />);

    expect(screen.getByTestId("propertiesTable")).toBeInTheDocument();
    expect(useProperties).toHaveBeenCalledTimes(1);
  });
});
