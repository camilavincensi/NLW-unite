import {StatusBar, Text, View, ScrollView, TouchableOpacity, Alert, Modal} from "react-native";
import {Header} from "@/components/header";
import {Credencial} from "@/components/credential";
import {FontAwesome} from "@expo/vector-icons";
import {colors} from "@/styles/colors";
import {Button} from "@/components/button";
import {useState} from "react";
import * as ImagePicker from "expo-image-picker"
import {QRCode} from "@/components/qrcode";

export default function Ticket() {

    const [image, setImage] = useState("")
    const [showQRCode, setShowQRCode] = useState(false)

    async function handleSelectImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,4]
            })

            if(result.assets){
                setImage(result.assets[0].uri)
            }
        }catch (error) {
            Alert.alert("Foto", "Não foi possui selecionar a imagem")
        }
    }

    return (
        <View className={"flex-1 bg-green-500"}>
            <StatusBar barStyle={"light-content"}/>
            <Header title={"Minha Credencial"}/>

            <ScrollView className={"-mt-28 -z-10"} contentContainerClassName={"px-8 pb-8"} showsVerticalScrollIndicator={false}>


            <Credencial onChangeAvatar={handleSelectImage} image={image} onShowQRCode={() => setShowQRCode(true)}/>

            <FontAwesome name={"angle-double-down"} size={24} color={colors.gray[300]} className={"self-center my-6"} />
            <Text className={"text-white font-bold text-2xl mt-4"}>Compartilhar credencial</Text>
            <Text className={"text-white font-regular text-base mt-1 mb-6"}>Mostre ao mundo que vcê vai participar do Unite Summit</Text>


                <Button title={"Compartilhar"}/>

                <TouchableOpacity activeOpacity={0.7} className={"mt-10"}>
                    <Text className={"text-base text-white font-bold text-center"}>Remover ingresso</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={showQRCode} statusBarTranslucent={true}>
                <View className={"flex-1 bg-green-500 items-center justify-center"}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setShowQRCode(false)}>
                        <QRCode value={"teste"} size={300}/>
                        <Text className={"font-body text-orange-500 text-sm mt-10 text-center"}>Fechar QRCodec</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
