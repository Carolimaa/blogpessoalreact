function Grid() {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-1 bg-purple-300 h-screen">Servidores</div>

        <div className="col-span-3 bg-green-300 h-screen">Canais</div>

        <div className="col-span-6 bg-pink-300 h-screen">Feed de Mensagens</div>

        <div className="col-span-2 bg-yellow-300 h-screen">Áreas de Membros</div>
    </div>
  )
}

export default Grid