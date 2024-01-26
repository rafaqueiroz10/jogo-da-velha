function empate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j].innerHTML === '') {
                if (i === 0) {
                    if (j === 0) {
                        if (tabuleiro[i + 1][j + 1].innerHTML !== tabuleiro[i + 2][j + 2].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i][j + 1].innerHTML !== tabuleiro[i][j + 2].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i + 1][j].innerHTML !== tabuleiro[i + 2][j].innerHTML) {
                            return false;
                        }
                    }
                    else if (j === 1) {
                        if (tabuleiro[i][j - 1].innerHTML !== tabuleiro[i][j + 1].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i + 1][j].innerHTML !==  tabuleiro[i + 2][j].innerHTML) {
                            return false;
                        }
                    }
                    else {
                        if (tabuleiro[i - 1][j - 1].innerHTML !== tabuleiro[i - 2][j - 2].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i][j - 1].innerHTML !== tabuleiro[i][j - 2].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i + 1][j].innerHTML !== tabuleiro[i + 2][j].innerHTML) {
                            return false;
                        }
                    }
                }
                else if (i === 1) {
                    if (j === 0) {
                        if (tabuleiro[i - 1][j].innerHTML !== tabuleiro[i + 1][j].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i][j + 1].innerHTML !== tabuleiro[i][j + 2].innerHTML) {
                            return false;
                        }
                    }
                    else if (j === 1) {
                        if (tabuleiro[i + 1][j - 1].innerHTML !== tabuleiro[i - 1][j + 1].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i - 1][j - 1].innerHTML !== tabuleiro[i + 1][j + 1].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i][j + 1].innerHTML !== tabuleiro[i][j - 1].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i - 1][j].innerHTML !== tabuleiro[i + 1][j].innerHTML) {
                            return false;
                        }
                    }
                    else {
                        if (tabuleiro[i - 1][j].innerHTML !== tabuleiro[i + 1][j].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i][j - 1].innerHTML !== tabuleiro[i][j - 2].innerHTML) {
                            return false;
                        }
                    }
                }
                else {
                    if (j === 0) {
                        if (tabuleiro[i][j + 1].innerHTML !== tabuleiro[i][j + 2].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i - 1][j].innerHTML !== tabuleiro[i - 2][j].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i - 1][j + 1].innerHTML !== tabuleiro[i - 2][j + 2].innerHTML) {
                            return false;
                        }
                    }
                    else if (j === 1) {
                        if (tabuleiro[i - 1][j].innerHTML !== tabuleiro[i - 2][j].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i][j - 1].innerHTML !== tabuleiro[i][j + 1].innerHTML) {
                            return false;
                        }
                    }
                    else {
                        if (tabuleiro[i][j - 1].innerHTML !== tabuleiro[i][j - 2].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i - 1][j].innerHTML !== tabuleiro[i - 2][j].innerHTML) {
                            return false;
                        }
                        if (tabuleiro[i - 1][j - 1].innerHTML !== tabuleiro[i - 2][j - 2].innerHTML) {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}