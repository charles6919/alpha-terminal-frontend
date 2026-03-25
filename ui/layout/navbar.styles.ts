export const navbarStyles = {
    nav: "sticky top-0 z-50 bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md",
    logo: "text-xl font-bold tracking-tight hover:text-yellow-300 transition-colors",
    menuList: "flex items-center gap-6",
    menuItem: {
        base: "text-sm font-medium transition-colors",
        active: "text-yellow-300 font-semibold",
        inactive: "text-gray-300 hover:text-white",
    },
    loginButton: "bg-blue-600 px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors",
    logoutButton: "bg-red-600 px-3 py-1.5 rounded text-sm font-medium hover:bg-red-700 transition-colors",
} as const
