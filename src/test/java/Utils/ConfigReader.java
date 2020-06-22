package Utils;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader {

    private static Properties properties;

    static {
        String path="Configuration.properties";

        try {
            FileInputStream inputStream=new FileInputStream(path);
            properties=new Properties();
            properties.load(inputStream);
            inputStream.close();

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static String getProperty(String key){
        return properties.getProperty(key);
    }
}
