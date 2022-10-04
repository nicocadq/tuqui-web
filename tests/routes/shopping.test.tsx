import { useCategories } from "hooks/use-shopping";
import { Shopping } from "routes/shopping";
import { render, waitFor } from "testing-utils";
import { categories } from "testing-utils/mocks/shopping";
import { USER_FEEDBACK_ROLE } from "testing-utils/variables";

const mockedUseCategories = useCategories as jest.Mock<unknown>;

jest.mock("hooks/use-shopping");

describe("Shopping", () => {
  beforeEach(() => {
    mockedUseCategories.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading status", () => {
    const { getByRole, getByTestId } = render(<Shopping />);

    expect(useCategories).toHaveBeenCalled();

    expect(
      getByRole("heading", {
        name: /Shopping lists/i,
      })
    ).toBeVisible();

    expect(getByTestId(USER_FEEDBACK_ROLE)).toBeVisible();
  });

  it("shows categories", async () => {
    mockedUseCategories.mockImplementation(() => ({
      isLoading: false,
      data: categories,
    }));

    const { getByTestId } = render(<Shopping />);

    await waitFor(() => {
      const container = getByTestId(/categories/i);

      expect(container).toBeVisible();
    });
  });

  it.todo("shows a search bar");
});
