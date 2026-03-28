export default function StatusFooter() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-1 h-6 bg-[#f9f9f9] border-t border-outline font-mono text-[9px] uppercase tracking-widest">
            <div className="flex items-center gap-3">
                <span className="text-outline">© 2025 ALPHA DESK.</span>
                <span className="text-on-surface font-bold">AI 분석 참고용.</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-tertiary-fixed-dim" />
                    <span className="text-tertiary font-bold">SYSTEM_STATUS:OK</span>
                </div>
            </div>
        </footer>
    )
}
