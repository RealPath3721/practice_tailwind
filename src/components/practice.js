import Input from './input'

export default function practice() {
    return (
      <div className=''>
        <div className="mx-auto mt-32 flex flex-col w-[417px] h-[391px]">
          <div className="h-[42px] mb-6">
            <p className="text-base font-bold">
              Personal Information
            </p>
            <p className="text-custom text-xs">Please enter your personal information</p>
          </div>
          <div className="flex flex-col h-[248px] mb-6">
            <Input className="placeholder-custom" placeholder="Sport"></Input>
            <Input className="placeholder-custom" placeholder="City"></Input>
            <Input className="placeholder-custom" placeholder="Age"></Input>
            <Input className="placeholder-custom" placeholder="Height"></Input>
          </div>
          <button className="text-sm bg-black h-[53px] text-white font-bold px-3 py-[18px] hover:opacity-70">Submit</button>
        </div>
      </div>
    )
  }