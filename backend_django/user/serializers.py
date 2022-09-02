from rest_framework.serializers import ModelSerializer
from user.models import User


class UserRegisterSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password']

    def create(self, validated_data):
        '''
        Sobre escritura del metodo create para encriptar password
        '''
        raw_password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if raw_password is not None:
            instance.set_password(raw_password)
        instance.save()
        return instance


class UserInfoSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'twitter', 'facebook', 'twitch']
