export const goToLoginPage = (navigate) => {
  navigate("/");
}

export const goToSignUpPage = (navigate) => {
  navigate("/signup");
}

export const goToMainPage = (navigate) => {
  navigate("/main");
}

export const goToHistoryPage = (navigate) => {
  navigate(`/history/`);
}

export const goToDetailPage = (navigate, date) => {
  navigate(`/detail/${date}`);
}