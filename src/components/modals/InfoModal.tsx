import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The word is 'NAUSH'.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        All the letters are in the word and in the correct spots.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="present"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="present"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is in the right place, and all the others are in the word but the wrong place.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P"/>
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="present"
        />
        </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        N and S are in the word but in the wrong place. The rest of the letters are not in the word.
      </p>
    </BaseModal>
  )
}
