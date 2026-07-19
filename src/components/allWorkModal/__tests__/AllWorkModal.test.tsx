import { fireEvent, render, screen } from "@testing-library/react";
import AllWorkModal from "../index";
import { vi } from "vitest";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
  useLocation: () => ({ pathname: "/portfolio" }),
}));

vi.mock("@/components/cardModal/CardModal", () => ({
  default: ({ item }: any) => <div data-testid="card-modal">{item.title}</div>,
}));
vi.mock("@/components/UI/Button/Button", () => ({
  default: ({ onClick }: any) => <button onClick={onClick}>X Close</button>,
}));

const mockData = [
  { id: "1", title: "Work 1" },
  { id: "2", title: "Work 2" },
];

describe("AllWorkModal", () => {
  it("does not render when inactive", () => {
    render(<AllWorkModal active={false} setActive={vi.fn()} data={mockData} />);
    expect(screen.queryByText("X Close")).not.toBeInTheDocument();
  });

  it("renders modal and items when active", () => {
    render(<AllWorkModal active={true} setActive={vi.fn()} data={mockData} />);
    expect(screen.getByText("X Close")).toBeInTheDocument();
    expect(screen.getAllByTestId("card-modal")).toHaveLength(2);
    expect(screen.getByText("Work 1")).toBeInTheDocument();
  });

  it("calls setActive(false) when clicking X Close", () => {
    const setActiveMock = vi.fn();
    render(
      <AllWorkModal active={true} setActive={setActiveMock} data={mockData} />,
    );
    fireEvent.click(screen.getByText("X Close"));
    expect(setActiveMock).toHaveBeenCalledWith(false);
  });
});
