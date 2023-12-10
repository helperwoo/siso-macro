const Header: React.FC = () => {
    const move = (route: string) => {
        location.href = route;
    }

    const logout = async () => {
        const res = await window.electron.user.logout();

        if (res.status) {
            location.href = "/login";
        } else {
            window.electron.window.dialog({ title: '로그아웃 실패', text: '로그아웃에 실패했습니다. 지속시 관리자에게 문의해주세요.' });
        }
    }

    return (
        <header className="bg-slate-800 w-full h-[100px]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="cursor-pointer flex">
                    <button className="cursor-pointer mr-2" onClick={() => move('/home')}>
                        예약
                    </button>
                    <button className="cursor-pointer mr-2" onClick={() => move('/list')}>
                        예약목록
                    </button>
                </div>
                <button className="cursor-pointer flex" onClick={logout}>
                    로그아웃
                </button>
            </nav>
        </header>
    );
}

export default Header;