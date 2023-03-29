//% blockGap=8
//% block="Camera Scroll"
//% color="#E10E4E"
//% icon="\uf083"
namespace CameraScroll {

    let canCameraScroll = 0
    let horizontalSpeed = 0
    let verticalSpeed = 0

    /**
    * Stops camera scroll.
    */
    //% block
    export function stopCameraScroll() {
        canCameraScroll = 0
    }

    /**
    * Creates a camera scroll.
    */
    //% block="scroll camera with horizontal speed $horizontally and vertical speed $vertically"
    export function cameraScrollDiagonally(horizontally: number, vertically: number) {
        canCameraScroll = 1
        horizontalSpeed = horizontally
        verticalSpeed = vertically
    }

    game.onUpdateInterval(10, function () {
        if (scene.cameraProperty(CameraProperty.X) != 0 && scene.cameraProperty(CameraProperty.Y) != 0) {
            if (canCameraScroll == 1) {
                scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + horizontalSpeed, scene.cameraProperty(CameraProperty.Y) + verticalSpeed)
            }
        }
    })

}